<template>
  <div id="calendar-container">

    <!-- breadcrumb -->
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
      <ol class="list-none p-0 inline-flex">
        <li class="flex items-center text-blue-500">
          <a href="/" class="text-gray-700">Home</a>
          <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </svg>
        </li>
        <li class="flex items-center">
          <a href="/Calendar" class="text-gray-600">Calendar</a>
        </li>
      </ol>
    </nav>
    <!-- breadcrumb end -->

    <div class="lg:flex justify-between items-center mb-6">
      <p class="text-2xl font-semibold mb-2 lg:mb-0">Calendar</p>
    </div>

    <!-- Calendar Navigation -->
    <div class="calendar-navigation">
      <button @click="previousMonth">Previous</button>
      <span>{{ monthName }} {{ currentYear }}</span>
      <button @click="nextMonth">Next</button>
    </div>

    <!-- Calendar Grid -->
    <div class="calendar-grid">
      <div class="day" v-for="day in daysOfWeek" :key="day">{{ day }}</div>

      <!-- Empty boxes for padding days before the first day -->
      <div class="empty-day" v-for="n in firstDayOffset" :key="'empty' + n"></div>

      <div
        class="date"
        v-for="date in datesInMonth"
        :key="date.getDate()"
        @click="selectDate(date)"
        :class="{ 'today': isToday(date), 'selected': isSelectedDate(date) }"
      >
        <span>{{ date.getDate() }}</span>
      </div>
    </div>

    <!-- Event Details -->
    <div class="event-details" v-if="selectedDate">
      <h2>Selected Date: {{ formatSelectedDate }}</h2>
      <p>No events for this day.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      currentDate: new Date(),
      selectedDate: null
    };
  },
  computed: {
    currentYear() {
      return this.currentDate.getFullYear();
    },
    currentMonth() {
      return this.currentDate.getMonth();
    },
    monthName() {
      return this.currentDate.toLocaleString('default', { month: 'long' });
    },
    firstDayOffset() {
      const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
      return firstDay;
    },
    daysInMonth() {
      const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      return lastDay;
    },
    datesInMonth() {
      const days = [];
      for (let i = 1; i <= this.daysInMonth; i++) {
        days.push(new Date(this.currentYear, this.currentMonth, i));
      }
      return days;
    },
    formatSelectedDate() {
      return this.selectedDate
        ? this.selectedDate.toLocaleDateString('default', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })
        : '';
    }
  },
  methods: {
    previousMonth() {
      this.currentDate.setMonth(this.currentMonth - 1);
      this.currentDate = new Date(this.currentDate); // trigger reactivity
    },
    nextMonth() {
      this.currentDate.setMonth(this.currentMonth + 1);
      this.currentDate = new Date(this.currentDate); // trigger reactivity
    },
    isToday(date) {
      const today = new Date();
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    },
    isSelectedDate(date) {
      return (
        this.selectedDate &&
        date.getDate() === this.selectedDate.getDate() &&
        date.getMonth() === this.selectedDate.getMonth() &&
        date.getFullYear() === this.selectedDate.getFullYear()
      );
    },
    selectDate(date) {
      this.selectedDate = date;
    }
  }
};
</script>

<style scoped>
.page-title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.calendar-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.calendar-navigation button {
  background-color: #007BFF;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.calendar-navigation button:hover {
  background-color: #0056b3;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-bottom: 30px;
}

.day {
  font-weight: bold;
  text-align: center;
}

.date {
  padding: 10px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.date.today {
  background-color: #3b82f6;
  color: white;
}

.date.selected {
  background-color: #f87171;
  color: white;
}

.date:hover {
  background-color: #007BFF;
  color: white;
}

.event-details {
  margin-top: 20px;
  padding: 20px;
  background-color: #eef2f7;
  border-radius: 8px;
}

.event-details h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.empty-day {
  visibility: hidden;
}
</style>
