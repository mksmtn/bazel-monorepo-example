import { Injectable } from '@nestjs/common';
import { MenuItemDto } from ':dtos';

@Injectable()
export class MenuService {
  listMenuItems(): MenuItemDto[] {
    return [
      {
        id: '1',
        name: 'Cappuccino',
      },
      {
        id: '2',
        name: 'Croissant',
      },
      {
        id: '3',
        name: 'Ham & Cheese baguette'
      }
    ];
  }
}