<template>
  <div class="example-box">
    <md-card class="example-box-card">

      <md-toolbar md-theme="white" class="md-dense">
        <h3 class="md-title">{{ cardTitle }}</h3>
      </md-toolbar>

      <md-card-area>
        <md-tabs md-right :md-dynamic-height="false" class="md-transparent example-tabs">

          <md-tab class="example-content" md-label="Demo" md-active>
            <slot name="demo"></slot>
          </md-tab>

          <md-tab class="code-content" md-label="Code">
            <slot name="code"></slot>
          </md-tab>

        </md-tabs>
      </md-card-area>

    </md-card>

  </div>
</template>

<script>
  export default {
    props: {
      cardTitle: String
    }
  }
</script>

<style lang="scss">
  .example-box .code-content {
    .code-block {
      margin: -16px;

      + .code-block {
        margin-top: 40px;
      }
    }
  }
</style>

<style lang="scss" scoped>
  .example-box {
    margin-bottom: 16px;
  }

  .md-title {
    position: relative;
    z-index: 3;
  }

  .example-tabs {
    margin-top: -48px;

    @media (max-width: 480px) {
      margin-top: -1px;
      background-color: #fff;
    }
  }

  .example-box-card {
    position: relative;
    overflow: hidden;
  }

  pre {
    display: none;
  }
</style>
