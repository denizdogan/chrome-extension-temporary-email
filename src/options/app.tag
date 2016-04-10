var StorageMixin = {
  init: function () {
    // store 
    this.store = function (key, value, cb) {
      var query = {};
      query[key] = value;
      chrome.storage.sync.set(query, cb)
    }
  }
};

riot.mixin(StorageMixin);

<app-textfield>
  <input type="text" value="{ opts.value }" />
</app-textfield>

<app-checkbox>
  <div>
    <input type="checkbox"
           id="{ name }"
           checked="{ value }"
           onclick="{ clicked }" />
    <label for="{ name }">
      { description }
    </label>
  </div>

  <script>
    clicked(e) {
      this.store(e.target.id, e.target.checked, () => {
        console.log('done! %s', chrome.runtime.lastError)
      })
    }
  </script>
</app-checkbox>

<app-section> 
  <h2>
    <i class="fa fa-{ icon }"></i>
    { title }
  </h2>

  <ul class="options">
    <li each={ options }>
      <app-checkbox value={ value } />
    </li>
  </ul>

  <script>
    toggle(e) {
      let value = e.target.checked
    }
  </script>
</app-section>

<app>
  <div class="container">
    <h1>Options</h1>

    <app-section each={ opts.sections } />
  </app-section>

  <script></script>
</app>
