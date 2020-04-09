import { NumberOnlyDirective } from './number-only.directive';
import { TestBed } from '@angular/core/testing';

describe('NumberOnlyDirective', () => {
  it('should create an instance', () => {
    const directive = new NumberOnlyDirective();
    expect(directive).toBeTruthy();
  });
});


describe('Directive: NumberOnlyDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberOnlyDirective]
    });
  });
});