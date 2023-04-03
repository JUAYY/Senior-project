<script setup></script>

<template>
  <main>
    <section class="py-5 text-center container">
      <div class="row py-lg-1">
        <!-- navbar -->
        <ul class="nav nav-pills justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
      <!-- navbar -->
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget mi et elit luctus
            vulputate sed eu arcu. Maecenas orci sem
          </h1>
          <p class="lead text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget mi et elit luctus
            vulputate sed eu arcu. Maecenas orci sem
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-6 mx-auto">
          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions">
            <option value="San Francisco"></option>
            <option value="New York"></option>
            <option value="Seattle"></option>
            <option value="Los Angeles"></option>
            <option value="Chicago"></option>
          </datalist>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

</script>
