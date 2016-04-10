<app-checkbox>
  <input type="checkbox"
         id="{ id }"
         checked="{ checked }"
         onclick="{ clicked }" />
  <label for="{ id }">
    { description }
  </label>

  <script>
    this.on('mount', () => {
      console.log('Mounted checkbox: %O', this);
      console.log(this)
      this.get(this.id, (value) => {
        if (value !== undefined) {
          this.checked = value
          this.update()
        }
      })
    })

    clicked(e) {
      this.set(e.target.id, e.target.checked)
    }
  </script>
</app-checkbox>

<app-number>
  <input type="text"
         id="{ id }"
         value="{ value }"
         onkeyup="{ changed }" />
  <label for="{ id }">
    { description }
  </label>

  <script>
    this.on('mount', function () {
      this.get(this.id, (value) => {
        if (value !== undefined) {
          this.value = value
        }
      })
    })

    // TODO: Use input[type="number"]
    changed(e) {
      let parsed = parseInt(e.target.value)
      if (parsed) {
        this.set(e.target.id, parsed)
      }
    }
  </script>
</app-number>

<app-section>
  <h2>
    <i class="fa fa-{ icon }"></i>
    { title }
  </h2>

  <ul class="options">
    <li each="{ options }">
      <app-checkbox if="{ typeof value == 'boolean' }" checked="{ value }" />
      <app-number if="{ typeof value == 'number' }" value="{ value }" />
    </li>
  </ul>
</app-section>

<save-button>
  <button type="button" class="pure-button pure-button-disabled pure-button-primary">
    Changes are automatically saved!
  </button>
</save-button>

<app>
  <h1>Options</h1>

  <app-section each="{ opts.sections }" />

  <save-button />
</app>
