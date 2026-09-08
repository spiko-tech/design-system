import { Match } from 'effect';

export const downloadBufferAsFile = (fileName: string, format: 'pdf' | 'csv' | 'mt940') => (buffer: Uint8Array) => {
  const url = URL.createObjectURL(
    new Blob([new Uint8Array(buffer)], {
      type: Match.value(format).pipe(
        Match.when('pdf', () => 'application/pdf'),
        Match.when('csv', () => 'text/csv'),
        Match.when('mt940', () => 'text/plain'),
        Match.exhaustive
      ),
    })
  );

  const link = document.createElement('a');
  link.href = url;
  link.download = `${fileName}.${format}`;

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
};
