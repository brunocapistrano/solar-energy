import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUnidadeConsumidoraComponent } from './page-unidade-consumidora.component';

describe('PageUnidadeConsumidoraComponent', () => {
  let component: PageUnidadeConsumidoraComponent;
  let fixture: ComponentFixture<PageUnidadeConsumidoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUnidadeConsumidoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUnidadeConsumidoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
