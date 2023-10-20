import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input()
  post!: Post;

  @Output()
  onRemove = new EventEmitter<number>();

  @ContentChild('info', { static: true })
  infoRef!: ElementRef;

  constructor() {}

  // methods
  removePost(id: any) {
    this.onRemove.emit(this.post.id);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      '🚀 ~ file: post.component.ts:20 ~ PostComponent ~ ngOnChanges ~ changes:',
      changes
    );
  }
  ngOnInit(): void {
    console.log('🚀 ~ file: post.component.ts:22 ~ PostComponent ~ ngOnInit');
  }
  ngDoCheck(): void {
    console.log(
      '🚀 ~ file: post.component.ts:29 ~ PostComponent ~ ngDoCheck ~ ngDoCheck:'
    );
  }
  ngAfterContentInit(): void {
    console.log(
      '🚀 ~ file: post.component.ts:30 ~ PostComponent ~ ngAfterContentInit ~ ngAfterContentInit:'
    );
  }
  ngAfterContentChecked(): void {
    console.log(
      '🚀 ~ file: post.component.ts:52 ~ ngAfterContentChecked ~ ngAfterContentChecked:'
    );
  }
  ngAfterViewInit(): void {
    console.log(
      '🚀 ~ file: post.component.ts:57 ~ ngAfterViewInit ~ ngAfterViewInit:'
    );
  }
  ngAfterViewChecked(): void {
    console.log(
      '🚀 ~ file: post.component.ts:71 ~ ngAfterViewChecked ~ ngAfterViewChecked:'
    );
  }
  ngOnDestroy(): void {
    console.log('🚀 ~ file: post.component.ts:77 ~ ngOnDestroy ~ ngOnDestroy:');
  }
}
