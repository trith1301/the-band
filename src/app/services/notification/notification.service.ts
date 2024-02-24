import { Injectable } from '@angular/core';

import toast from '@brenoroosevelt/toast';

import { NOTIFICATION_TYPES } from '../../core/enums';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  options: any = {
    title: 'Notification',
    color: '#faf5ff',
    position: 'top',
    duration: 1200,
    closeBtn: false,
    append: false,
  };

  constructor() {}

  setup(customOptions: any) {
    this.options = Object.assign({}, this.options, customOptions);
  }

  push(type: NOTIFICATION_TYPES, message: string) {
    const pushNotifications = {
      system: () => {
        toast.system(message, this.options);
      },
      info: () => {
        toast.info(message, this.options);
      },
      warning: () => {
        toast.warning(message, this.options);
      },
      error: () => {
        toast.error(message, this.options);
      },
      success: () => {
        toast.success(message, this.options);
      },
      create: () => {
        toast.create(message, this.options);
      },
    };

    pushNotifications[type as keyof typeof pushNotifications]();
  }
}
