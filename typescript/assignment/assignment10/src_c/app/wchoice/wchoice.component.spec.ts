import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WchoiceComponent } from './wchoice.component';

describe('WchoiceComponent', () => {
  let component: WchoiceComponent;
  let fixture: ComponentFixture<WchoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WchoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WchoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
