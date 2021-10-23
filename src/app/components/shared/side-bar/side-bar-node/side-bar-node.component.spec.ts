import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarNodeComponent } from './side-bar-node.component';

describe('SideBarNodeComponent', () => {
  let component: SideBarNodeComponent;
  let fixture: ComponentFixture<SideBarNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
