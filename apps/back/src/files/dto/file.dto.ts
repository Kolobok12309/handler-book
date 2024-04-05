import { ApiProperty } from '@nestjs/swagger';

import { File, FileCategory } from '@hb/types';

export class FileDto implements File {
  @ApiProperty({
    description: 'File id',
  })
  id: number;

  @ApiProperty({
    description: 'File url',
  })
  url: string;

  @ApiProperty({
    description: 'File category',
  })
  category: FileCategory;

  @ApiProperty({
    description: 'File name with extension',
  })
  name: string;

  @ApiProperty({
    description: 'Date of file upload',
  })
  createdAt: Date;
}
