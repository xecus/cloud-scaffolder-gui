<template>
  <div>
    <md-button class="md-primary" @click="draw">Draw</md-button>
    <hr>
    <div id="mynetwork"></div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'page3',
  data () {
    return {
      network: null,
      nodes: [],
      edges: []
    }
  },
  computed: {
    networkData () {
      return {
        nodes: this.nodes,
        edges: this.edges
      }
    },
    networkOptions () {
      return {
        nodes: {
          scaling: {
            min: 16,
            max: 32
          }
        },
        edges: {
          color: 'gray',
          smooth: false
        },
        physics: {
          barnesHut: { gravitationalConstant: -30000 },
          stabilization: { iterations: 2500 }
        },
        groups: {
          'switch': {
            shape: 'triangle',
            color: '#FF9900' // orange
          },
          desktop: {
            shape: 'dot',
            color: '#2B7CE9' // blue
          },
          mobile: {
            shape: 'dot',
            color: '#5A1E5C' // purple
          },
          server: {
            shape: 'square',
            color: '#C5000B' // red
          },
          internet: {
            shape: 'square',
            color: '#109618' // green
          }
        }
      }
    }
  },
  created () {
  },
  ready () {
  },
  components: {
  },
  methods: {
    draw () {
      this.prepareData()
      this.doDraw()
    },
    prepareData () {
      let mynetwork = document.getElementById('mynetwork')
      let LENGTH_MAIN = 350
      let LENGTH_SERVER = 150
      let LENGTH_SUB = 50
      let WIDTH_SCALE = 2
      let RED = '#C5000B'
      let GRAY = 'gray'
      this.nodes = []
      this.edges = []
      this.nodes.push({id: 1, label: '192.168.0.1', group: 'switch', value: 10})
      this.nodes.push({id: 2, label: '192.168.0.2', group: 'switch', value: 8})
      this.nodes.push({id: 3, label: '192.168.0.3', group: 'switch', value: 6})
      this.edges.push({from: 1, to: 2, length: LENGTH_MAIN, width: WIDTH_SCALE * 6, label: '0.71 mbps'})
      this.edges.push({from: 1, to: 3, length: LENGTH_MAIN, width: WIDTH_SCALE * 4, label: '0.55 mbps'})
      for (let i = 100; i <= 104; i++) {
        let value = 1
        let width = WIDTH_SCALE * 2
        let color = GRAY
        let label = null
        if (i === 103) {
          value = 5
          width = 3
        }
        if (i === 102) {
          color = RED
          label = 'error'
        }
        this.nodes.push({id: i, label: '192.168.0.' + i, group: 'desktop', value: value})
        this.edges.push({from: 2, to: i, length: LENGTH_SUB, color: color, fontColor: color, width: width, label: label})
      }
      this.nodes.push({ id: 201, label: '192.168.0.201', group: 'desktop', value: 1 })
      this.edges.push({ from: 2, to: 201, length: LENGTH_SUB, color: GRAY, width: WIDTH_SCALE })
      this.nodes.push({ id: 202, label: '192.168.0.202', group: 'desktop', value: 4 })
      this.edges.push({ from: 3, to: 202, length: LENGTH_SUB, color: GRAY, width: WIDTH_SCALE * 2 })
      for (let i = 230; i <= 231; i++) {
        this.nodes.push({ id: i, label: '192.168.0.' + i, group: 'mobile', value: 2 })
        this.edges.push({ from: 3, to: i, length: LENGTH_SUB, color: GRAY, fontColor: GRAY, width: WIDTH_SCALE })
      }
      this.nodes.push({ id: 10, label: '192.168.0.10', group: 'server', value: 10 })
      this.edges.push({ from: 1, to: 10, length: LENGTH_SERVER, color: GRAY, width: WIDTH_SCALE * 6, label: '0.92 mbps' })
      this.nodes.push({ id: 11, label: '192.168.0.11', group: 'server', value: 7 })
      this.edges.push({ from: 1, to: 11, length: LENGTH_SERVER, color: GRAY, width: WIDTH_SCALE * 3, label: '0.68 mbps' })
      this.nodes.push({ id: 12, label: '192.168.0.12', group: 'server', value: 3 })
      this.edges.push({ from: 1, to: 12, length: LENGTH_SERVER, color: GRAY, width: WIDTH_SCALE, label: '0.3 mbps' })
      this.nodes.push({ id: 204, label: 'Internet', group: 'internet', value: 10 })
      this.edges.push({ from: 1, to: 204, length: 200, width: WIDTH_SCALE * 3, label: '0.63 mbps' })
      let x = -mynetwork.clientWidth / 2 + 50
      let y = -mynetwork.clientHeight / 2 + 50
      let step = 70
      this.nodes.push({ id: 1000, x: x, y: y, label: 'Internet', group: 'internet', value: 1, fixed: true, physics: false })
      this.nodes.push({ id: 1001, x: x, y: y + step, label: 'Switch', group: 'switch', value: 1, fixed: true, physics: false })
      this.nodes.push({ id: 1002, x: x, y: y + 2 * step, label: 'Server', group: 'server', value: 1, fixed: true, physics: false })
      this.nodes.push({ id: 1003, x: x, y: y + 3 * step, label: 'Computer', group: 'desktop', value: 1, fixed: true, physics: false })
      this.nodes.push({ id: 1004, x: x, y: y + 4 * step, label: 'Smartphone', group: 'mobile', value: 1, fixed: true, physics: false })
    },
    doDraw () {
      let mynetwork = document.getElementById('mynetwork')
      this.network = new window.vis.Network(mynetwork, this.networkData, this.networkOptions)
      this.network.on('click', (params) => {
        params.event = {}
        console.log(JSON.stringify(params, null, 4))
      })
      /*
      this.network.on('doubleClick', (params) => {
      })
      this.network.on('oncontext', (params) => {
      })
      this.network.on('dragStart', (params) => {
      })
      this.network.on('dragging', (params) => {
      })
      this.network.on('dragEnd', (params) => {
      })
      this.network.on('zoom', (params) => {
      })
      this.network.on('showPopup', (params) => {
      })
      this.network.on('hidePopup', () => {
      })
      this.network.on('select', (params) => {
      })
      this.network.on('selectNode', (params) => {
      })
      this.network.on('selectEdge', (params) => {
      })
      this.network.on('deselectNode', (params) => {
      })
      this.network.on('deselectEdge', (params) => {
      })
      this.network.on('hoverNode', (params) => {
      })
      this.network.on('hoverEdge', (params) => {
      })
      this.network.on('blurNode', (params) => {
      })
      this.network.on('blurEdge', (params) => {
      })
      */
    }
  }
}
</script>

<style type="text/css">
#mynetwork { 
        width: 100%;
        height: 320px;
}
</style>

