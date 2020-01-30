# @ridi/web-ui

[![](https://img.shields.io/npm/v/@ridi/web-ui.svg?label=%40ridi%2Fweb-ui&style=flat)](https://www.npmjs.com/package/@ridi/web-ui)

## Install
```bash
$ npm install @ridi/web-ui
```

## Support TypeScript
```typescript jsx
import * as React from 'react';
import { Book } from '@ridi/web-ui';

interface BookCoverProps {
  bookId: string
  width: number
}

const BookCover: React.FC<BookCoverProps> = props => {
  const { bookId, width } = props;
  return (
    <>
      <Book.Thumbnail
        thumbnailWidth={width}
        thumbnailUrl={`https://misc.ridibooks.com/cover/${bookId}/xxlarge`}
      />
    </>
  )
}
```
