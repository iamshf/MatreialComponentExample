import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattreeComponent } from './mattree.component';

describe('MattreeComponent', () => {
  let component: MattreeComponent;
  let fixture: ComponentFixture<MattreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MattreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MattreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
