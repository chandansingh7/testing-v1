
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HeroParentComponent} from "./hero-parent.component";
import {HeroChildComponent} from "./hero-child.components";

describe('ComponentIneractionComponent', () => {
  let component: HeroParentComponent;
  let fixture: ComponentFixture<HeroParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroParentComponent]
    });
    fixture = TestBed.createComponent(HeroParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should pass properties to children properly', async () => {
  //   const parent = element(by.tagName('app-hero-parent'));
  //   const heroes = parent.all(by.tagName('app-hero-child'));
  //
  //   for (let i = 0; i < heroNames.length; i++) {
  //     const childTitle = await heroes.get(i).element(by.tagName('h3')).getText();
  //     const childDetail = await heroes.get(i).element(by.tagName('p')).getText();
  //     expect(childTitle).toEqual(heroNames[i] + ' says:');
  //     expect(childDetail).toContain(masterName);
  //   }
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// ...
const heroNames = ['Dr. IQ', 'Magneta', 'Bombasto'];
const masterName = 'Master';


// ...
