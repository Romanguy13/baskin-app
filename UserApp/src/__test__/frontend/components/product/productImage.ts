import path from 'path';
import fs from 'fs';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export async function addImage(imageName: string, imageType: string) {
  // Adding image
  const imagePathName = path.resolve(__dirname, '../../') + `/images/${imageName}`;
  const fileContent = fs.readFileSync(imagePathName);
  const file = new File([fileContent], 'imageName.jpeg', { type: `image/${imageType}` });

  // Get the input button
  const input = screen.getByLabelText('add product image');

  // mock for URL.createObjectURL
  Object.defineProperty(window.URL, 'createObjectURL', {
    value: jest.fn().mockReturnValue(imagePathName),
    configurable: true,
  });

  await userEvent.upload(input, [file]);
}
