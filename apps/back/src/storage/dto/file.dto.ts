import { ApiProperty } from '@nestjs/swagger';

import { File, FileCategory } from '@hb/types';

export class FileDto implements Exclude<File, 'uploadedBy' | 'key'> {
  @ApiProperty({
    description: 'File id',
  })
  id: number;

  @ApiProperty({
    description: 'File name with extension',
  })
  name: string;

  @ApiProperty({
    description: 'File category',
  })
  category: FileCategory;

  @ApiProperty({
    description: 'File url',
  })
  url: string;

  @ApiProperty({
    description: 'Date of file upload',
  })
  createdAt: Date;
}
