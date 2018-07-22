<template>
	<div>
	<q-page padding>
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

	<h2>Cards</h2>

<q-btn
  loading
  color="primary"
:percentage="59"
  label="Button Label"
  light-percentage
/>
	<q-btn
  loading
  color="primary"
:percentage="59"
  label="Button Label"
  light-percentage
/>
		<q-card color="secondary">
			<q-card-title class="text-center">	<h4 class="text-weight-bold">Typography</h4>
				<p>change the font style in the global css</p>
			</q-card-title>
		<q-card-separator/>
		<p class="text-right q-display-3" >q-display-3, text-right</p>
		<q-card-separator/>
		<p class="text-left q-display-2" >q-display-2, text-left</p>	<q-card-separator/>
		<p class="text-center q-display-1" >q-display-1, text-center</p></q-card>
		<dl class="horizontal">
	  <dt>Description lists</dt>
	  <dd>A description list is perfect for defining terms.</dd>
	  <dt>Euismod</dt>
	  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
	  <blockquote class="text-right">
  <p> A block qoute Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <small>Someone famous for <cite title="Quasar Framework">Quasar Framework</cite></small>
</blockquote>
	</dl>



	<q-card inline class="q-ma-lg" style="width: 500px">
		<q-card-title>
  <!--
    Optional. Anything that goes here without specifying "slot"
    is considered the main title
  -->
  Title

  <!-- Optional. Adding the subtitle. Notice slot="subtitle" -->
  <span slot="subtitle">Subtitle</span>

  <!--
    Optional. Adding something on the right side,
    like an icon triggering a Popover with a menu.
    Notice the slot="right"
  -->
  <q-icon slot="right" name="more_vert">
    <q-popover>
      <q-list link class="no-border">
        <q-item v-close-overlay>
          <q-item-main label="Remove Card" />
        </q-item>
        <q-item v-close-overlay>
          <q-item-main label="Send Feedback" />
        </q-item>
        <q-item v-close-overlay>
          <q-item-main label="Share" />
        </q-item>
      </q-list>
    </q-popover>
  </q-icon>
</q-card-title>
  <q-card-media>
    <img src="~assets/quasar-logo-full.svg">
  </q-card-media>
  <q-card-title>
    Cafe Basilico
    <q-rating slot="subtitle" :max="5" />
    <div slot="right" class="row items-center">
      <q-icon name="place" /> 250 ft
    </div>
  </q-card-title>
  <q-card-main>
    <p>$・Italian, Cafe</p>
    <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
  </q-card-main>
  <q-card-separator />
  <q-card-actions>
    <q-btn flat round dense icon="event" />
    <q-btn flat label="5:30PM" />
    <q-btn flat label="7:30PM" />
    <q-btn flat label="9:00PM" />
    <q-btn flat color="primary" label="Reserve" />
  </q-card-actions>

</q-card>
<br/>
<br/>
<br/>


<q-card style="width: 500px">
  <q-card-title>
    Card with Collapsible List
  </q-card-title>

  <q-card-separator />

  <q-list>
    <q-collapsible icon="explore" label="First">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="perm_identity" label="Second">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="shopping_cart" label="Third">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>
  </q-list>
</q-card>


<q-card>
  <q-item>
    <q-item-side avatar="~assets/quasar-logo-full.svg" />
    <q-item-main>
      <q-item-tile label>Title</q-item-tile>
      <q-item-tile sublabel>Subhead</q-item-tile>
    </q-item-main>
  </q-item>
</q-card>

<q-card inline class="q-ma-lg" style="width: 500px">
  <q-card-title>
    Card with Collapsible List
  </q-card-title>

  <q-card-separator />

  <q-list>
    <q-collapsible icon="explore" label="First">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="perm_identity" label="Second">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="shopping_cart" label="Third">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>
  </q-list>
</q-card>
<q-card inline class="q-ma-lg" style="width: 500px">
  <q-card-title>
    Card with Collapsible List
  </q-card-title>

  <q-card-separator />

  <q-list>
    <q-collapsible icon="explore" label="First">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="perm_identity" label="Second">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="shopping_cart" label="Third">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>
  </q-list>
</q-card>
<q-card inline class="q-ma-lg" style="width: 500px">
  <q-card-title>
    Card with Collapsible List
  </q-card-title>

  <q-card-separator />

  <q-list>
    <q-collapsible icon="explore" label="First">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="perm_identity" label="Second">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="shopping_cart" label="Third">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>
  </q-list>
</q-card>
<q-card inline class="q-ma-lg" style="width: 500px">
  <q-card-title>
    Card with Collapsible List
  </q-card-title>

  <q-card-separator />

  <q-list>
    <q-collapsible icon="explore" label="First">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="perm_identity" label="Second">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="shopping_cart" label="Third">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>
  </q-list>
</q-card>
<q-card inline class="q-ma-lg" style="width: 500px">
  <q-card-title>
    Card with Collapsible List
  </q-card-title>

  <q-card-separator />

  <q-list>
    <q-collapsible icon="explore" label="First">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="perm_identity" label="Second">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="shopping_cart" label="Third">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>
  </q-list>
</q-card>
<q-card inline class="q-ma-lg" style="width: 500px">
  <q-card-title>
    Card with Collapsible List
  </q-card-title>

  <q-card-separator />

  <q-list>
    <q-collapsible icon="explore" label="First">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="perm_identity" label="Second">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="shopping_cart" label="Third">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>
  </q-list>
</q-card>
<q-card inline class="q-ma-lg" style="width: 500px">
  <q-card-title>
    Card with Collapsible List
  </q-card-title>

  <q-card-separator />

  <q-list>
    <q-collapsible icon="explore" label="First">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="perm_identity" label="Second">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="shopping_cart" label="Third">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>
  </q-list>
</q-card>
</q-page>






<q-page class="row gutter-sm">

<q-card  class="col-md-6 col-sm-12 no-margin" >
  <q-card-title>
    Card with Collapsible List
  </q-card-title>

  <q-card-separator />

  <q-list>
    <q-collapsible icon="explore" label="First">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="perm_identity" label="Second">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="shopping_cart" label="Third">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>
  </q-list>
</q-card>
<q-card  class="col-md-6 col-sm-12 no-margin" >
  <q-card-title>
    Card with Collapsible List
  </q-card-title>

  <q-card-separator />

  <q-list>
    <q-collapsible icon="explore" label="First">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="perm_identity" label="Second">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="shopping_cart" label="Third">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>
  </q-list>
</q-card>
<q-card  class="col-md-6 col-sm-12 no-margin" >
  <q-card-title>
    Card with Collapsible List
  </q-card-title>

  <q-card-separator />

  <q-list>
    <q-collapsible icon="explore" label="First">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="perm_identity" label="Second">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="shopping_cart" label="Third">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>
  </q-list>
</q-card>
<q-card  class="col-md-6 col-sm-12 no-margin" >
  <q-card-title>
    Card with Collapsible List
  </q-card-title>

  <q-card-separator />

  <q-list>
    <q-collapsible icon="explore" label="First">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="perm_identity" label="Second">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="shopping_cart" label="Third">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>
  </q-list>
</q-card>
<q-card  class="col-md-6 col-sm-12 no-margin" >
  <q-card-title>
    Card with Collapsible List
  </q-card-title>

  <q-card-separator />

  <q-list>
    <q-collapsible icon="explore" label="First">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="perm_identity" label="Second">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="shopping_cart" label="Third">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>
  </q-list>
</q-card>

	
</q-page>
</div>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
