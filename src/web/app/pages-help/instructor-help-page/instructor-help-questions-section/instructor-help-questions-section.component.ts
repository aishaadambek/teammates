import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InstructorHelpSectionComponent } from '../instructor-help-section.component';

/**
 * Questions Section of the Instructor Help Page.
 */
@Component({
  selector: 'tm-instructor-help-questions-section',
  templateUrl: './instructor-help-questions-section.component.html',
  styleUrls: ['./instructor-help-questions-section.component.scss'],
})
export class InstructorHelpQuestionsSectionComponent extends InstructorHelpSectionComponent implements OnInit {

  isEssayQsCollapsed: boolean = false;
  isMCQSingleCollapsed: boolean = false;
  isMCQMultCollapsed: boolean = false;
  isNumScaleCollapsed: boolean = false;
  isPtsOptionsCollapsed: boolean = false;
  isPtsRecipientsCollapsed: boolean = false;
  isContribQsCollapsed: boolean = false;
  isRubricQsCollapsed: boolean = false;
  isRankOptsCollapsed: boolean = false;
  isRankRcptsCollapsed: boolean = false;
  @Output() collapsePeerEvalTips: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor(private modalService: NgbModal) {
    super();
  }

  /**
   * Opens modal window.
   */
  openModal(modal: any): void {
    this.modalService.open(modal);
  }

  ngOnInit(): void {
  }

  /**
   * To scroll to a specific HTML id
   */
  jumpTo(target: string): boolean {
    const destination: Element | null = document.getElementById(target);
    if (destination) {
      destination.scrollIntoView();
      // to prevent the navbar from covering the text
      window.scrollTo(0, window.pageYOffset - 50);
      if (target === 'tips-for-conducting-peer-eval') {
        this.collapsePeerEvalTips.emit(true);
      }
    }
    return false;
  }
}
