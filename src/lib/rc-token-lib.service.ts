import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RcTokenLibService {

  /**
   * Get the path to the main SCSS file
   */
  getScssPath(): string {
    return 'scss-variables';
  }

  /**
   * Get the path to specific SCSS partials
   */
  getPartialPath(partial: string): string {
    const validPartials = [
      'scss/variables/colors',
      'scss/variables/typography',
      'scss/variables/spacing',
    ];

    if (validPartials.includes(partial)) {
      return `rc-token-lib/lib/${partial}`;
    }

    throw new Error(`Invalid partial: ${partial}`);
  }
}

