import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCadastroDeEnergiaGeradaComponent } from './page-cadastro-de-energia-gerada.component';

describe('PageCadastroDeEnergiaGeradaComponent', () => {
  let component: PageCadastroDeEnergiaGeradaComponent;
  let fixture: ComponentFixture<PageCadastroDeEnergiaGeradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCadastroDeEnergiaGeradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCadastroDeEnergiaGeradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
