<template>

	<q-page>

<h3>Toolbar</h3>
  <q-layout-header>
    <q-toolbar color="secondary">
      <!--
        Toggles QLayout left side
        (Assuming the Drawer has a model bound to "leftSide")
      -->
      <q-btn
        flat round dense
        icon="menu"
        @click="leftSide = !leftSide"
      />

      <q-toolbar-title>
        Title
      </q-toolbar-title>

      <q-btn flat round dense icon="mail" />
      <q-btn flat round dense icon="alarm" />
    </q-toolbar>
  </q-layout-header>
		<br><br>
		<q-toolbar color="primary">
  <!--
    For Toolbar title, we use
    QToolbarTitle component
  -->
  <q-toolbar-title>
    Title
  </q-toolbar-title>

  <!--
    In a Toolbar, buttons are best
    configured as "flat, round, dense" and with an icon,
    but any button will do
  -->
  <q-btn flat round dense icon="mail" />
</q-toolbar>
<br><br><br>
<!-- A color "inverted" Toolbar -->
<q-toolbar inverted color="primary" :style="{border:`1px solid #333`}" >
	<q-toolbar-title>inverted color toolbar here</q-toolbar-title>

  <q-btn flat round dense icon="mail" />
  <br><br><br>
</q-toolbar>


<h3>tabs</h3>


<q-tabs>
  <!-- Tabs - notice slot="title" -->
  <q-tab default count="5" slot="title" name="tab-1" icon="message" />
  <q-tab disable slot="title" name="tab-2" icon="fingerprint" />
  <q-tab alert slot="title" name="tab-3" icon="account_box" />
  <q-tab slot="title" name="tab-4" icon="accessibility" />
  <q-tab slot="title" name="tab-5" icon="build" />

  <!-- Targets -->
  <q-tab-pane name="tab-1">Tab One</q-tab-pane>
  <q-tab-pane name="tab-2">Tab Two</q-tab-pane>
  <q-tab-pane name="tab-3">Tab Three</q-tab-pane>
  <q-tab-pane name="tab-4">Tab Four</q-tab-pane>
  <q-tab-pane name="tab-5">Tab Five</q-tab-pane>
</q-tabs>

<br><br><br>
 <div>
    <q-tabs v-model="selectedTab">
      <q-tab slot="title" name="tab-1" icon="message" />
      <q-tab slot="title" name="tab-2" icon="fingerprint" />
      <q-tab slot="title" name="tab-3" icon="account_box" />
    </q-tabs>
    <q-btn @click="selectThirdTab">Select Third Tab</q-btn>
  </div>

<q-select
  type="radio"
  v-model="tabsModel"
  :options="tabsOptions"
></q-select>

<q-tabs v-model="tabsModel">
  <q-tab name="xtab-1" icon="message" slot="title" />
  <q-tab name="xtab-2" icon="account_box" slot="title" />
  <q-tab name="xtab-3" icon="mail" slot="title" />

  <q-tab-pane name="xtab-1">Tab One</q-tab-pane>
  <q-tab-pane name="xtab-2">Tab Two</q-tab-pane>
  <q-tab-pane name="xtab-3">Tab Three</q-tab-pane>
</q-tabs>
<br>
<br>
<br>
<q-layout>
  ...
  <q-layout-header>
    <q-tabs>
      <q-route-tab
        icon="mail"
        to="/mails"
        exact
        slot="title"
      />

      <q-route-tab
        icon="alarm"
        to="/alarms"
        exact
        slot="title"
      />
    </q-tabs>
  </q-layout-header>
  ...
</q-layout>
</q-page>
</template>
<script>
	import { QTabs, QTab, QBtn } from 'quasar'

export default {
  data () {
    return {
      // initializing for second tab to be selected by default
      selectedTab: 'tab-2',
      tabsModel: 'xtab-2',
    tabsOptions: [
      {label: 'Tab 1', value: 'xtab-1'},
      {label: 'Tab 2', value: 'xtab-2'},
      {label: 'Tab 3', value: 'xtab-3'}
    ]
    }
  },
  methods: {
    selectThirdTab () {
      // we select third tab which has `name` set to 'tab-3'
      this.selectedTab = 'tab-3'
    }
  }
}
</script>
<style></style>