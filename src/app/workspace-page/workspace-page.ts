import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

type WorkspaceSection = 'overview' | 'schedule' | 'messages' | 'transactions';
type AppointmentFilter = 'all' | 'upcoming' | 'completed';
type MessageFilter = 'all' | 'unread';

interface Appointment {
  id: number;
  patient: string;
  reason: string;
  date: string;
  time: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}

interface InboxMessage {
  id: number;
  sender: string;
  role: string;
  patient: string;
  subject: string;
  preview: string;
  body: string;
  received: string;
  read: boolean;
}

interface Transaction {
  id: string;
  patient: string;
  service: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Pending';
}

@Component({
  selector: 'app-workspace-page',
  imports: [FormsModule, RouterLink],
  templateUrl: './workspace-page.html',
  styleUrl: './workspace-page.scss',
})
export class WorkspacePage implements OnInit {
  section: WorkspaceSection = 'overview';
  appointmentFilter: AppointmentFilter = 'all';
  messageFilter: MessageFilter = 'all';
  messageSearch = '';
  transactionFilter: 'all' | 'pending' | 'paid' = 'all';
  selectedMessageId: number | null = null;
  showAppointmentForm = false;
  weekOffset = 0;
  private nextAppointmentId = 10;

  appointmentForm = {
    patient: '',
    reason: '',
    date: this.toDateInputValue(new Date()),
    time: '09:00',
  };

  appointments: Appointment[] = this.createInitialAppointments();

  messages: InboxMessage[] = [
    {
      id: 1,
      sender: 'Dr. Priya Shah',
      role: 'Cardiology',
      patient: 'Jessica Taylor',
      subject: 'Follow-up on blood pressure readings',
      preview: 'I reviewed the readings from the last two weeks...',
      body: 'I reviewed the blood pressure readings from the last two weeks. They are trending in the right direction. Please continue the current plan and bring your home monitor to the next appointment so we can compare readings.',
      received: '9:42 AM',
      read: false,
    },
    {
      id: 2,
      sender: 'Northside Lab',
      role: 'Laboratory',
      patient: 'Ryan Johnson',
      subject: 'Lab results are ready for review',
      preview: 'The requested routine panel has been processed...',
      body: 'The requested routine panel has been processed and is ready for clinician review. Please contact the patient to discuss the results and document the follow-up plan.',
      received: 'Yesterday',
      read: false,
    },
    {
      id: 3,
      sender: 'Morgan Reed',
      role: 'Care Coordinator',
      patient: 'Emily Williams',
      subject: 'Appointment confirmation',
      preview: 'The patient confirmed the appointment for Thursday...',
      body: 'The patient confirmed the appointment for Thursday at 10:30 AM. Transportation has been arranged, and the patient requested a reminder the day before.',
      received: 'Yesterday',
      read: true,
    },
    {
      id: 4,
      sender: 'Dr. Alan Chen',
      role: 'Family Medicine',
      patient: 'Samantha Johnson',
      subject: 'Referral documentation',
      preview: 'I have attached the referral notes for the specialist...',
      body: 'The referral notes for the specialist consultation are complete. Please ensure the patient has a copy of the preparation instructions before the visit.',
      received: 'Nov 20',
      read: true,
    },
  ];

  transactions: Transaction[] = [
    { id: 'INV-2048', patient: 'Jessica Taylor', service: 'Consultation', date: 'Nov 21, 2026', amount: 125, status: 'Pending' },
    { id: 'INV-2047', patient: 'Ryan Johnson', service: 'Laboratory services', date: 'Nov 20, 2026', amount: 86.5, status: 'Paid' },
    { id: 'INV-2046', patient: 'Emily Williams', service: 'Annual wellness visit', date: 'Nov 18, 2026', amount: 175, status: 'Pending' },
    { id: 'INV-2045', patient: 'Samantha Johnson', service: 'Follow-up appointment', date: 'Nov 16, 2026', amount: 95, status: 'Paid' },
    { id: 'INV-2044', patient: 'Tyler Davis', service: 'Imaging services', date: 'Nov 14, 2026', amount: 240, status: 'Paid' },
  ];

  readonly publicResources = [
    {
      title: 'Health Canada',
      description: 'Federal health product, safety, and public health information.',
      url: 'https://www.canada.ca/en/health-canada.html',
      kind: 'Government of Canada',
    },
    {
      title: 'Public Health Agency of Canada',
      description: 'Public health guidance, surveillance, and prevention resources.',
      url: 'https://www.canada.ca/en/public-health.html',
      kind: 'Government of Canada',
    },
    {
      title: 'Canada Health Act',
      description: 'The federal framework for publicly funded health care insurance.',
      url: 'https://laws-lois.justice.gc.ca/eng/acts/C-6/',
      kind: 'Justice Laws Website',
    },
    {
      title: 'Personal Information Protection and Electronic Documents Act',
      description: 'Federal privacy law covering personal information in commercial activities.',
      url: 'https://laws-lois.justice.gc.ca/eng/acts/P-8.6/',
      kind: 'Justice Laws Website',
    },
  ];

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const section = data['section'];
      if (this.isWorkspaceSection(section)) {
        this.section = section;
      }
    });

    if (this.messages.length > 0) {
      this.selectedMessageId = this.messages[0].id;
      this.messages[0].read = true;
    }
  }

  get unreadCount(): number {
    return this.messages.filter((message) => !message.read).length;
  }

  get todayAppointments(): Appointment[] {
    return this.appointments.filter((appointment) =>
      appointment.date === this.todayInputValue && appointment.status !== 'Cancelled',
    );
  }

  get todayScheduledCount(): number {
    return this.todayAppointments.filter((appointment) => appointment.status === 'Scheduled').length;
  }

  get pendingInvoiceCount(): number {
    return this.transactions.filter((transaction) => transaction.status === 'Pending').length;
  }

  get paidInvoiceCount(): number {
    return this.transactions.filter((transaction) => transaction.status === 'Paid').length;
  }

  get filteredMessages(): InboxMessage[] {
    const search = this.messageSearch.trim().toLocaleLowerCase();
    return this.messages.filter((message) => {
      const matchesFilter = this.messageFilter === 'all' || !message.read;
      const searchableText = `${message.sender} ${message.patient} ${message.subject} ${message.preview}`.toLocaleLowerCase();
      return matchesFilter && searchableText.includes(search);
    });
  }

  get pendingAmount(): number {
    return this.transactions
      .filter((transaction) => transaction.status === 'Pending')
      .reduce((total, transaction) => total + transaction.amount, 0);
  }

  get filteredTransactions(): Transaction[] {
    if (this.transactionFilter === 'all') {
      return this.transactions;
    }
    return this.transactions.filter((transaction) => transaction.status.toLocaleLowerCase() === this.transactionFilter);
  }

  get currentWeekAppointments(): Appointment[] {
    const start = this.weekStart;
    const end = new Date(start);
    end.setDate(end.getDate() + 7);

    return this.appointments
      .filter((appointment) => {
        const appointmentDate = this.parseDateInput(appointment.date);
        const inWeek = appointmentDate >= start && appointmentDate < end;
        const matchesFilter = this.appointmentFilter === 'all'
          || (this.appointmentFilter === 'upcoming' && appointment.status === 'Scheduled')
          || (this.appointmentFilter === 'completed' && appointment.status === 'Completed');
        return inWeek && matchesFilter;
      })
      .slice()
      .sort((first, second) => `${first.date} ${first.time}`.localeCompare(`${second.date} ${second.time}`));
  }

  get selectedMessage(): InboxMessage | null {
    return this.messages.find((message) => message.id === this.selectedMessageId) ?? null;
  }

  get weekRangeLabel(): string {
    const start = this.weekStart;
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    return `${start.toLocaleDateString('en-CA', options)} – ${end.toLocaleDateString('en-CA', options)}, ${end.getFullYear()}`;
  }

  get todayInputValue(): string {
    return this.toDateInputValue(new Date());
  }

  selectMessage(message: InboxMessage): void {
    this.selectedMessageId = message.id;
    message.read = true;
  }

  toggleSelectedMessageRead(): void {
    const message = this.selectedMessage;
    if (message) {
      message.read = !message.read;
    }
  }

  changeWeek(offset: number): void {
    this.weekOffset += offset;
  }

  showCurrentWeek(): void {
    this.weekOffset = 0;
  }

  openAppointmentForm(): void {
    this.appointmentForm = {
      patient: '',
      reason: '',
      date: this.todayInputValue,
      time: '09:00',
    };
    this.showAppointmentForm = true;
  }

  closeAppointmentForm(): void {
    this.showAppointmentForm = false;
  }

  addAppointment(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.appointments = [
      ...this.appointments,
      {
        id: this.nextAppointmentId++,
        patient: this.appointmentForm.patient.trim(),
        reason: this.appointmentForm.reason.trim(),
        date: this.appointmentForm.date,
        time: this.appointmentForm.time,
        status: 'Scheduled',
      },
    ];
    this.appointmentFilter = 'all';
    this.showAppointmentForm = false;
    this.weekOffset = this.offsetForDate(this.parseDateInput(this.appointmentForm.date));
  }

  cancelAppointment(id: number): void {
    this.appointments = this.appointments.map((appointment) =>
      appointment.id === id ? { ...appointment, status: 'Cancelled' } : appointment,
    );
  }

  recordPayment(id: string): void {
    this.transactions = this.transactions.map((transaction) =>
      transaction.id === id ? { ...transaction, status: 'Paid' } : transaction,
    );
  }

  formatDate(date: string): string {
    return this.parseDateInput(date).toLocaleDateString('en-CA', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(amount);
  }

  getInitials(name: string): string {
    return name.split(' ').map((part) => part[0]).join('');
  }

  private get weekStart(): Date {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    start.setDate(start.getDate() - ((start.getDay() + 6) % 7) + this.weekOffset * 7);
    return start;
  }

  private createInitialAppointments(): Appointment[] {
    const data: Array<[number, string, string, string, Appointment['status']]> = [
      [-1, 'Jessica Taylor', 'Blood pressure follow-up', '09:00', 'Completed'],
      [0, 'Ryan Johnson', 'Annual wellness visit', '10:30', 'Scheduled'],
      [0, 'Emily Williams', 'Review lab results', '13:15', 'Scheduled'],
      [1, 'Samantha Johnson', 'Medication review', '11:00', 'Scheduled'],
      [2, 'Tyler Davis', 'Imaging consultation', '14:00', 'Scheduled'],
      [4, 'Morgan Chen', 'Post-treatment check-in', '09:45', 'Scheduled'],
      [5, 'Olivia Brown', 'Preventive care visit', '15:30', 'Scheduled'],
    ];

    return data.map(([offset, patient, reason, time, status], index) => ({
      id: index + 1,
      patient,
      reason,
      date: this.toDateInputValue(this.dateOffset(offset)),
      time,
      status,
    }));
  }

  private dateOffset(offset: number): Date {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() + offset);
    return date;
  }

  private toDateInputValue(date: Date): string {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private parseDateInput(date: string): Date {
    const [year, month, day] = date.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  private offsetForDate(date: Date): number {
    const todayWeek = new Date();
    todayWeek.setHours(0, 0, 0, 0);
    todayWeek.setDate(todayWeek.getDate() - ((todayWeek.getDay() + 6) % 7));
    const selectedWeek = new Date(date);
    selectedWeek.setDate(selectedWeek.getDate() - ((selectedWeek.getDay() + 6) % 7));
    return Math.round((selectedWeek.getTime() - todayWeek.getTime()) / (7 * 24 * 60 * 60 * 1000));
  }

  private isWorkspaceSection(section: unknown): section is WorkspaceSection {
    return section === 'overview'
      || section === 'schedule'
      || section === 'messages'
      || section === 'transactions';
  }
}
