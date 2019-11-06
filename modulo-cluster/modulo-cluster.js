{
  const {
    html,
  } = Polymer;
  /**
    `<modulo-cluster>` Description.

    Example:

    ```html
    <modulo-cluster></modulo-cluster>
    ```

    ## Styling
    The following custom properties and mixins are available for styling:

    ### Custom Properties
    | Custom Property     | Selector | CSS Property | Value       |
    | ------------------- | -------- | ------------ | ----------- |
    | --cells-fontDefault | :host    | font-family  |  sans-serif |
    ### @apply
    | Mixins    | Selector | Value |
    | --------- | -------- | ----- |
    | --modulo-cluster | :host    | {} |

    * @customElement
    * @polymer
    * @extends {Polymer.Element}
    * @demo demo/index.html
  */
  class ModuloCluster extends Polymer.Element {
    static get is() {
      return 'modulo-cluster';
    }
    static get properties() {
      return {
	objectArray: {
	  type:Array,
	  value:[]
	},
        arrayTitle: {
          type:Array,
          value:[]
        },
        arraySize: {
          type:Array,
          value:[]
        }
      };
    }
    connectedCallback(){
      super.connectedCallback();
      console.log(this.objectArray);
      this.$.ajax.addEventListener('request-success', (e) => {
        this.objectArray = e.detail
        console.log('New Array', this.objectArray)
        this.arrayTitle = Object.keys(this.objectArray[0])
        const size = this.arrayTitle.length
        this.sizeArray = size
        console.log('Size Array',this.sizeArray)
	console.log('Array Title',this.arrayTitle)
        console.log('Array Title', size)
      });
      this.$.ajax.generateRequest();
    }
   static get template() {
      return html `
      <style include="modulo-cluster-styles modulo-cluster-shared-styles"></style>
      <slot></slot>
      <cells-generic-dp
        id = "ajax"
        host = "http://localhost:3000"
        path = "endpoint"
	method= "GET">
      </cells-generic-dp>

      <div class = "dinamic-tbl">
        <table>
          <caption>CLUSTER</caption>
          <template is="dom-repear" items="[[arraySize]]">
            <tr>
              <td class = "verde">[[item]]</td>
            </tr>
          </template>
          <template is="dom-repeat" items="[[objectArray]]">
            <tr>
  	      <td class = "green">[[item.TIPODEOPERACION]]</td>
              <td class = "green">[[item.PEM]]</td>
              <td class = "green">[[item.MONTO]]</td>
              <td class = "green">[[item.NACIONAL_INT]]</td>
              <td class = "green">[[item.ECI]]</td>
              <td class = "green">[[item.NIPOFF]]</td>
              <td class = "green">[[item.CVV2]]</td>
              <td class = "green">[[item.TJ_F_TJ_D]]</td>
              <td class = "green">[[item.NIVELCUENTA]]</td>
              <td class = "green">[[item.REINCIDENCIA]]</td>
              <td class = "green">[[item.SEGMENTO]]</td>
              <td class = "green">[[item.ANTIGUEDAD]]</td>
              <td class = "green">[[item.Q2]]</td>
              <td class = "green">[[item.DIASTRANSCURRIDOS]]</td>
              <td class = "green">[[item.NUMOVIMIENTOS]]</td>
              <td class = "green">[[item.DIFTIEMPOENTREMOVIMIENTOS]]</td>
              <td class = "green">[[item.MONTOF]]</td>
              <td class = "green">[[item.FRAUDE]]</td>
              <td class = "green">[[item.TP_TNP]]</td>
              <td class = "green">[[item.MISMOMONT]]O</td>
              <td class = "green">[[item.MISMAAFILIACION]]</td>
              <td class = "green">[[item.TIEMPOENTREMOVIMIENTOS]]</td>
              <td class = "green">[[item.SUMAMONTOMOVIMIENTOSSELECCIONADOS]]</$
              <td class = "green">[[item.PATRONDESBLOQUEO]]</td>
              <td class = "green">[[item.AUTHCE]]</td>
              <td class = "green">[[item.DIFFECHAOPERACIONALTA]]</td>
              <td class = "green">[[item.SITUACION]]</td>
              <td class = "green">[[item.NORECONOCEPRODUCTO]]</td>
              <td class = "green">[[item.SINMOVIMIENTO]]</td>
            </tr>
          <template>
        </table>
      </div>
      `;
    }
  }
  customElements.define(ModuloCluster.is, ModuloCluster);
}

