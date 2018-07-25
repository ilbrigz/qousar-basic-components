<template>
	<q-page padding><h1>groupings</h1>

<h3>Collapsible</h3>
<p>basic and 1 indented</p>
		<q-list>
  <q-collapsible icon="explore" label="indented" indent>
    <div>
      Content
    </div>
  </q-collapsible>
  <q-collapsible icon="perm_identity" label="Second">
    <div>
      Content
    </div>
  </q-collapsible>
  <q-collapsible icon="shopping_cart" label="Third">
    <div>
      Content
    </div>
  </q-collapsible>
</q-list>
<br>

<p>grouped</p>
<q-list>
  <q-collapsible group="somegroup" icon="explore" label="First">
    <div>
      Content
    </div>
  </q-collapsible>
  <q-collapsible group="somegroup" icon="perm_identity" label="Second">
    <div>
      Content
    </div>
  </q-collapsible>
  <q-collapsible group="somegroup" icon="shopping_cart" label="Third">
    <div>
      Content
    </div>
  </q-collapsible>
</q-list>

  <q-collapsible
    v-model="open"
    icon="perm_identity"
    label="With a model and events"
  >
    <div>...content...</div>
  </q-collapsible>



  <q-collapsible>
  <template slot="header">
    <q-chip color="primary" small class="q-mr-sm">
      Custom header
    </q-chip>
    <q-item-main label="using slot" />
    <q-item-side right>
      <q-icon name="star" color="red" size="24px" />
    </q-item-side>
  </template>

  <div>Collapsible content</div>
</q-collapsible>


<q-list separator>
  <q-collapsible indent icon="mail" label="Inbox" sublabel="5 unread emails" opened>

    <q-collapsible indent icon="receipt" label="Receipts">

      <q-collapsible label="Today">
        <div>...content...</div>
      </q-collapsible>
      <q-collapsible label="Yesterday">
        <div>...content...</div>
      </q-collapsible>

    </q-collapsible>

    <q-collapsible indent icon="schedule" label="Postponed">
      <div>...content...</div>
    </q-collapsible>

  </q-collapsible>

  <q-collapsible indent icon="send" label="Outbox" sublabel="Empty">
    <q-collapsible label="Today">
      <div>...content...</div>
    </q-collapsible>
    <q-collapsible label="Yesterday">
      <div>...content...</div>
    </q-collapsible>
  </q-collapsible>

  <q-collapsible indent icon="drafts" label="Draft" sublabel="Draft a new email">
    <div>...content...</div>
  </q-collapsible>
</q-list>


<q-collapsible popup icon="mail" label="Inbox" sublabel="5 unread emails">
  <div>...content...</div>
</q-collapsible>
<q-collapsible popup icon="send" label="Outbox" sublabel="Empty">
  <div>...content...</div>
</q-collapsible>

<br>

 <q-collapsible
    indent
    icon="explore"
    label="Counter"
    @show="startCounting"
    @hide="stopCounting"
  >
    <div>
      <q-chip color="secondary">
        Counting: {{ counter }}
      </q-chip>
    </div>
    <div class="q-mt-md">
      Will only count when opened, using the show/hide events to control count timer.
    </div>
  </q-collapsible>
  <br>
  <br>

  <q-collapsible icon="explore" label="First Card" sublabel="Contains a Card">
  <q-card>
    <q-card-title>
      Card Title
    </q-card-title>
    <q-card-main>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </q-card-main>
  </q-card>
</q-collapsible>

<br><br><br><br>

<h3>Collapsible</h3>


	</q-page>
</template>

<script>
export default {
  data () {
    return { open: true, counter: 0}
   
  },
  methods: {
    toggle () {
    	alert('hello');
      this.open = !this.open
    },
     startCounting () {
      this.hndl = setInterval(() => {
        this.counter++
      }, 1000)
    },
    stopCounting () {
      clearInterval(this.hndl)
    }
  }
}


</script>

<style>
</style>
