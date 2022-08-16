import { Test } from '@nestjs/testing';
import { MenuService } from "./menu.service"

describe('MenuService', () => {
  let service: MenuService | undefined;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MenuService]
    }).compile();

    service = module.get(MenuService)
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return three items', () => {
    expect(service?.listMenuItems().length).toEqual(3);
  });
})