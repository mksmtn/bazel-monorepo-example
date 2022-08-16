import { Injectable } from '@nestjs/common';
import { MenuItemDto } from ':dtos'; 
import { MenuService } from './menu.service';

@Injectable()
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  async listMenuItems(): Promise<MenuItemDto[]> {
    return Promise.resolve(this.menuService.listMenuItems());
  }
}
