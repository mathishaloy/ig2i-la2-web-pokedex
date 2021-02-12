import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPokemonListComponent } from './team-pokemon-list.component';

describe('TeamPokemonListComponent', () => {
  let component: TeamPokemonListComponent;
  let fixture: ComponentFixture<TeamPokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamPokemonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
