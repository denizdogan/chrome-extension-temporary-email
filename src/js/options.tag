<boolean>
  <div>
    <input for={ opts.id } checked={ opts.value } />
    <label for={ opts.id }>
      { opts.description }
    </label>
  </div>
</boolean>

<options>

  <h1>Options</h1>
  
  <section each={ opts.providers }>
    <h2>Provider: { this.name }</h2>
    <ul>
      <li each={ this.options }>
      </li>
    </ul>
  </section>

</options>
