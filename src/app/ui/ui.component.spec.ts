import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiComponent } from './ui.component';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call multiplicacion method',()=> {
     //Arrange
     let result =0;
     component.value1 = 8;
     component.value2 = 2;

     //Act
     component.multiplicacion();
     result = component.resultado;

     //Assert
     expect(result).toBe(16);
  });
});
