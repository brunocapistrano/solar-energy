import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditarUnidadeComponent } from './page-editar-unidade.component';

describe('PageEditarUnidadeComponent', () => {
  let component: PageEditarUnidadeComponent;
  let fixture: ComponentFixture<PageEditarUnidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditarUnidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditarUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
