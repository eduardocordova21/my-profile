import { TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [MainComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-profile'`, () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.componentInstance;
    //expect(app.title).toEqual('my-profile');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'my-profile app is running!'
    );
  });
});
