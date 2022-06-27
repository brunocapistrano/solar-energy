import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNovaUnidadeComponent } from './page-nova-unidade.component';

describe('PageNovaUnidadeComponent', () => {
  let component: PageNovaUnidadeComponent;
  let fixture: ComponentFixture<PageNovaUnidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNovaUnidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNovaUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
