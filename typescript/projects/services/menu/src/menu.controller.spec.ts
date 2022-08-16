import { Test } from '@nestjs/testing';
import { MenuController } from './menu.controller';

describe('MenuController', () => {
  let controller: MenuController | undefined;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MenuController],
    }).compile();

    controller = module.get(MenuController);
  });

  it('should be created', () => {
    expect(controller).toBeDefined();
  })

  it('should return a list of menu items', () => {
    const items = controller!.listMenuItems();
    expect(Array.isArray(items)).toBe(true);
    expect(items[0]).toHaveProperty('id');
    expect(items[0]).toHaveProperty('name');
  });
});
