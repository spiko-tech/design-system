import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Icon } from './Icon.js';

afterEach(() => {
  cleanup();
});

/**
 * The icon hover animations target these glyphs' sub-paths by `nth-child`
 * (apps/app/src/iconAnimations.css). lucide-react is free to reorder, add or remove a glyph's
 * sub-paths on any release, which would silently animate the wrong element rather than throw. These
 * assertions pin the structure each gesture was written against, so a lucide bump fails here
 * instead of shipping a broken animation. The two local circle glyphs are pinned for the same
 * reason: an edit to their markup is just as silent.
 *
 * If one of these fails after a lucide upgrade: re-read the glyph's new sub-path order and
 * update both the `nth-child` targets in iconAnimations.css and the expectation here.
 */
describe('animated icons keep the sub-path order the hover animations target', () => {
  const subPathsOf = (icon: React.ReactElement) => {
    const { container } = render(icon);
    const svg = container.querySelector('svg');

    if (svg === null) throw new Error('icon rendered no <svg>');

    return [...svg.children];
  };

  const tagsOf = (icon: React.ReactElement) => subPathsOf(icon).map((child) => child.tagName);
  const dOf = (icon: React.ReactElement, oneBasedIndex: number) =>
    subPathsOf(icon)[oneBasedIndex - 1]?.getAttribute('d') ?? '';

  it('home: child 1 is the door that draws in, 2 the walls and roof', () => {
    // Exact `d`, not a prefix: iconAnimations.css dashes the door by its measured length.
    expect(tagsOf(<Icon.Home />)).toEqual(['path', 'path']);
    expect(dOf(<Icon.Home />, 1)).toBe('M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8');
    expect(dOf(<Icon.Home />, 2)).toMatch(/^M3 10a2 2 0 0 1 \.709-1\.528/);
  });

  it('chartNoAxesColumn: three bars, ordered RIGHT to LEFT', () => {
    // The delays in iconAnimations.css are mapped onto this reversed order so the cascade still
    // runs left to right. If lucide ever flips it to 6/12/18, those delays must flip back.
    expect(tagsOf(<Icon.ChartNoAxesColumn />)).toEqual(['line', 'line', 'line']);
    expect(subPathsOf(<Icon.ChartNoAxesColumn />).map((bar) => bar.getAttribute('x1'))).toEqual(['18', '12', '6']);
  });

  it('settings: child 1 is the gear that rotates, child 2 the hub that stays put', () => {
    expect(tagsOf(<Icon.Settings />)).toEqual(['path', 'circle']);
  });

  it('fileTextCentered: four paths, with the two rules centred on x=12', () => {
    expect(tagsOf(<Icon.FileTextCentered />)).toEqual(['path', 'path', 'path', 'path']);
    expect(dOf(<Icon.FileTextCentered />, 3)).toBe('M9 13h6');
    expect(dOf(<Icon.FileTextCentered />, 4)).toBe('M8 17h8');
  });

  it('link2: child 1 is the left hook, 2 the right hook, 3 the connector', () => {
    expect(tagsOf(<Icon.Link2 />)).toEqual(['path', 'path', 'line']);
    expect(dOf(<Icon.Link2 />, 1)).toMatch(/^M9 17/);
    expect(dOf(<Icon.Link2 />, 2)).toMatch(/^M15 7/);
  });

  it('circleHelp: child 1 is the static circle, 2 the hook, 3 the dot', () => {
    expect(tagsOf(<Icon.CircleHelp />)).toEqual(['circle', 'path', 'path']);
    expect(dOf(<Icon.CircleHelp />, 3)).toBe('M12 17h.01');
  });

  it('user: child 1 is the shoulders, 2 the head that nods', () => {
    expect(tagsOf(<Icon.User />)).toEqual(['path', 'circle']);
    expect(dOf(<Icon.User />, 1)).toMatch(/^M19 21/);
  });

  it('mail: child 1 is the flap crease, 2 the envelope body', () => {
    expect(tagsOf(<Icon.Mail />)).toEqual(['path', 'rect']);
    expect(dOf(<Icon.Mail />, 1)).toMatch(/^m22 7/);
  });

  it('gift: child 1 is the lid, 2 the ribbon, 3 the body, 4 the bow', () => {
    // Children 1 and 4 share a view-box transform origin so they lift as one piece; the box body
    // at child 3 must stay put. Any reorder here would lift the wrong parts of the glyph.
    expect(tagsOf(<Icon.Gift />)).toEqual(['rect', 'path', 'path', 'path']);
    expect(dOf(<Icon.Gift />, 2)).toBe('M12 8v13');
    expect(dOf(<Icon.Gift />, 3)).toMatch(/^M19 12v7/);
    expect(dOf(<Icon.Gift />, 4)).toMatch(/^M7\.5 8/);
  });

  it('arrowDownCircle: child 1 is the circle that stays put, 2 the stem and 3 the chevron that fall', () => {
    expect(tagsOf(<Icon.ArrowDownCircle />)).toEqual(['circle', 'path', 'path']);
    expect(dOf(<Icon.ArrowDownCircle />, 2)).toBe('M12 8v8');
    expect(dOf(<Icon.ArrowDownCircle />, 3)).toBe('m8 12 4 4 4-4');
  });

  it('arrowUpRightCircle: child 1 is the ring, 2 the arrow head, 3 the diagonal shaft', () => {
    // Local glyph: the ring must stay put while 2 and 3 shoot up and to the right together.
    expect(tagsOf(<Icon.ArrowUpRightCircle />)).toEqual(['path', 'path', 'path']);
    expect(dOf(<Icon.ArrowUpRightCircle />, 1)).toMatch(/^M21\.1669 11\.9999/);
    expect(dOf(<Icon.ArrowUpRightCircle />, 3)).toMatch(/^M15\.4175 9\.76059/);
  });

  it('arrowLeftRightCircle: child 1 is the ring, 2 the upper arrow, 3 the lower one', () => {
    // Local glyph: each arrow darts off the side it points at, so they must be separate paths -
    // fused back into one and they would slide sideways together instead of crossing.
    expect(tagsOf(<Icon.ArrowLeftRightCircle />)).toEqual(['rect', 'path', 'path']);
    expect(dOf(<Icon.ArrowLeftRightCircle />, 2)).toMatch(/^M10\.0945 7\.26293/);
    expect(dOf(<Icon.ArrowLeftRightCircle />, 3)).toMatch(/^M13\.6655 12\.1429/);
  });

  it('plus: two bars, both bounding boxes centred on 12,12 so the quarter turn is seamless', () => {
    expect(tagsOf(<Icon.Plus />)).toEqual(['path', 'path']);
    expect(dOf(<Icon.Plus />, 1)).toBe('M5 12h14');
    expect(dOf(<Icon.Plus />, 2)).toBe('M12 5v14');
  });

  it('trash2: children 4 and 5 are the rim and handle that hinge open together', () => {
    // They share a view-box origin at the rim's left end (3,6); the can body at child 3 stays put.
    expect(tagsOf(<Icon.Trash2 />)).toEqual(['path', 'path', 'path', 'path', 'path']);
    expect(dOf(<Icon.Trash2 />, 3)).toMatch(/^M19 6v14/);
    expect(dOf(<Icon.Trash2 />, 4)).toBe('M3 6h18');
    expect(dOf(<Icon.Trash2 />, 5)).toMatch(/^M8 6V4/);
  });

  it('download: child 1 is the stem, 2 the tray that stays put, 3 the chevron', () => {
    expect(tagsOf(<Icon.Download />)).toEqual(['path', 'path', 'path']);
    expect(dOf(<Icon.Download />, 1)).toBe('M12 15V3');
    expect(dOf(<Icon.Download />, 3)).toBe('m7 10 5 5 5-5');
  });

  it('search: child 1 is the handle, 2 the lens', () => {
    expect(tagsOf(<Icon.Search />)).toEqual(['path', 'circle']);
    expect(dOf(<Icon.Search />, 1)).toMatch(/^m21 21/);
  });

  it('refreshCw: four sub-paths, so the whole svg turns rather than each path', () => {
    // The gesture rotates the <svg>; this only guards that no single sub-path became the glyph.
    expect(tagsOf(<Icon.RefreshCw />)).toEqual(['path', 'path', 'path', 'path']);
  });

  it('squarePen: child 1 is the square that stays put, 2 the pen', () => {
    expect(tagsOf(<Icon.SquarePen />)).toEqual(['path', 'path']);
    expect(dOf(<Icon.SquarePen />, 2)).toMatch(/^M18\.375 2\.625/);
  });

  it('externalLink: child 1 is the arrow head, 2 the shaft, 3 the window that stays put', () => {
    expect(tagsOf(<Icon.ExternalLink />)).toEqual(['path', 'path', 'path']);
    expect(dOf(<Icon.ExternalLink />, 1)).toBe('M15 3h6v6');
    expect(dOf(<Icon.ExternalLink />, 2)).toBe('M10 14 21 3');
  });

  it('circleX: child 1 is the circle, 2 and 3 the strokes centred on 12,12', () => {
    expect(tagsOf(<Icon.CircleX />)).toEqual(['circle', 'path', 'path']);
    expect(dOf(<Icon.CircleX />, 2)).toBe('m15 9-6 6');
    expect(dOf(<Icon.CircleX />, 3)).toBe('m9 9 6 6');
  });

  it('chevronsUpDown: child 1 is the lower chevron, 2 the upper one', () => {
    expect(tagsOf(<Icon.ChevronsUpDown />)).toEqual(['path', 'path']);
    expect(dOf(<Icon.ChevronsUpDown />, 1)).toBe('m7 15 5 5 5-5');
    expect(dOf(<Icon.ChevronsUpDown />, 2)).toBe('m7 9 5-5 5 5');
  });

  it('chevronUp: a single path', () => {
    expect(tagsOf(<Icon.ChevronUp />)).toEqual(['path']);
  });

  it('logOut: child 1 is the arrow head, 2 the shaft, 3 the door frame that stays put', () => {
    expect(tagsOf(<Icon.LogOut />)).toEqual(['path', 'path', 'path']);
    expect(dOf(<Icon.LogOut />, 1)).toBe('m16 17 5-5-5-5');
    expect(dOf(<Icon.LogOut />, 2)).toBe('M21 12H9');
  });

  it('sparkle: a single four-pointed star centred on 12,12, so the quarter turn is seamless', () => {
    // The twinkle turns and scales the whole path about its centre; a second sub-path would twinkle
    // around its own box instead and the glyph would come apart mid-gesture.
    expect(tagsOf(<Icon.Sparkle />)).toEqual(['path']);
    expect(dOf(<Icon.Sparkle />, 1)).toMatch(/^M11\.017 2\.814a1 1 0 0 1 1\.966 0/);
  });
});
