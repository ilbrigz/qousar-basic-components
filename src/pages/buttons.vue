<template>
	<q-page class="relative-position text-center">
		<h1>buttons</h1>
		<q-btn class="no-shadow" no-ripple  outline label="New item"/>
		<br/>
		<!-- Just icon -->
		<q-btn icon="map" />
		<br/>
		<!-- Icon & Label -->
		<q-btn icon="create" label="New item" />
		<br>
		<q-btn
  color="primary"
  size="sm"
  label="Edit"
/>
<br>

<!-- Regular shaped -->
<q-btn
  loading
  color="primary"
:percentage="59"
  label="Button Label"
  dark-percentage
/>
<br>
<q-btn
  loading
  color="primary"
:percentage="59"
  label="Button Label"
  light-percentage
/>
<br>
  <q-btn
    :loading="loading"
    round
    icon="map"
    color="primary"
    @click="handler"
  >
    <q-spinner-circles slot="loading" />
  </q-btn>


  <div>
    <!-- a simple text field watching for the enter key release -->
    <q-input v-model="test" @keyup.enter="simulateSubmit" />

    <!--
      A button with v-model set to submit.
      v-model scope variable must be a strict Boolean
    -->
    <q-btn :loading="submitting" @click="simulateSubmit" label="Save">
      <q-spinner-facebook slot="loading" />
    </q-btn>
  </div>
  <br>
  <q-btn color="primary" disable label="Primary Button" />
  <br>
    <q-btn @click="clickHandler" :repeat-timeout="1000" label="Click Me" />
    <br>
    <q-btn-group outline>
  <q-btn outline class="no-margin" label="One" />
  <q-btn outline class="no-margin" label="Two" />
  <q-btn outline class="no-margin" label="Three" />
</q-btn-group>
<br>
<br>
<br>
<q-btn-group rounded inverted color="primary">
  <q-btn rounded class= "no-margin" color="primary" label="One" />
  <q-btn rounded class= "no-margin" color="primary" label="Two" />
  <q-btn-dropdown class= "no-margin" rounded color="primary" label="Three" split>
    <!-- dropdown content goes here -->
    <q-list link>
      <q-item v-close-overlay>
        <q-item-side icon="folder" inverted color="primary" />
        <q-item-main>
          <q-item-tile label>Photos</q-item-tile>
          <q-item-tile sublabel>February 22, 2016</q-item-tile>
        </q-item-main>
        <q-item-side right icon="info" color="amber" />
      </q-item>
      <q-item-separator inset />
      <q-list-header inset>Files</q-list-header>
      <q-item v-close-overlay>
        <q-item-side icon="assignment" inverted />
        <q-item-main>
          <q-item-tile label>Vacation</q-item-tile>
          <q-item-tile sublabel>February 22, 2016</q-item-tile>
        </q-item-main>
        <q-item-side right icon="info" color="amber" />
      </q-item>
    </q-list>
  </q-btn-dropdown>
</q-btn-group>
<br>
<q-btn-dropdown label="Button">
  <!-- dropdown content -->
  <q-list link>
    <q-item>
      <q-item-main>
        <q-item-tile label>Item</q-item-tile>
      </q-item-main>
    </q-item>
       <q-item>
      <q-item-main>
        <q-item-tile label>Item</q-item-tile>
      </q-item-main>
    </q-item>
       <q-item>
      <q-item-main>
        <q-item-tile label>Item</q-item-tile>
      </q-item-main>
    </q-item>
  </q-list>
</q-btn-dropdown>

<br>
<q-btn-dropdown split label="Split">
  <!-- dropdown content -->
  <q-list link>
    <q-item>
      <q-item-main>
        <q-item-tile label>Item</q-item-tile>
      </q-item-main>
    </q-item>
  </q-list>
</q-btn-dropdown>
<br>
<br>
<br>
	</q-page>


</template>

<script>
export default {
  data () {
    return {
      loading: false,
      test: '',
         submitting: false
    }
  },
  methods: {
    handler () {
      this.loading = true
      // we simulate a delay here:
      setTimeout(() => {
        this.loading = false
      }, 3000)
    },
     simulateSubmit () {
      this.submitting = true

      // Simulating a delay here.
      // When we are done, we reset "submitting"
      // Boolean to false to restore the
      // initial state.
      setTimeout(() => {
        // delay simulated, we are done,
        // now restoring submit to its initial state
        this.submitting = false
      }, 3000)
    },
    clickHandler() {
    	console.log('holding');
    }
  }
}
</script>

<style scoped>
.q-btn {
margin: 1rem;
}
</style>
