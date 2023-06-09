import { Attribute, NewAttribute, EditAttribute } from './schema';

import request, { gql } from 'graphql-request';

export class AttributeService {
  public async list(id?: string): Promise<Attribute[]>{
    const mutation = gql`
      query ListAttributes($id: String) {
        attribute(id: $id) {
          id, category, name, type, min, max, step, symbol, values
        }
      }
    `;

    const data = await request(
      'http://localhost:4002/graphql',
      mutation,
      { id: id },
    );

    return data.attribute;
  }

  public async remove(id: string): Promise<Attribute> {
    const mutation = gql`
      mutation RemoveAttribute($id: String!) {
        removeAttribute(id: $id) {
          id, category, name, type, min, max, step, symbol, values
        }
      }
    `;
    const data = await request(
      'http://localhost:4002/graphql',
      mutation,
      { id: id },
    );

    return data.removeAttribute;
  }

  public async add(input: NewAttribute): Promise<Attribute> {
    const mutation = gql`
      mutation AddAttribute($input: AttributeInput!) {
        addAttribute(input: $input) {
          id, category, name, type, min, max, step, symbol, values
        }
      }
    `;

    const data = await request(
      'http://localhost:4002/graphql',
      mutation,
      { input: input },
    );


    return data.addAttribute;
  }

  public async edit(input: EditAttribute): Promise<Attribute> {
    const mutation = gql`
      mutation EditAttribute($input: EditAttributeInput!) {
        editAttribute(input: $input) {
          id, category, name, type, min, max, step, symbol, values
        }
      }
    `;

    const data = await request(
      'http://localhost:4002/graphql',
      mutation,
      { input: input },
    );


    return data.editAttribute;
  }
}