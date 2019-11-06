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
        }
      };
    }
    connectedCallback(){
      super.connectedCallback();
      console.log(this.objectArray);
      this.$.ajax.addEventListener('request-success', (e) => {
        //First Way
        this.objectArray = e.detail
        // Second Way
        //this.set('objectArray',e.detail)
        console.log('New Array', this.objectArray)
        this.arrayTitle = Object.keys(this.objectArray[0])
        const size = this.arrayTitle.length
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
          <template is="dom-repear" items="[[size]]">
            <tr>
              <td class = "verde">[[items]]</td>
            </tr>
          </template>
          <template is="dom-repeat" items="[[objectArray]]">
            <tr>
  	      <td class = "verde">[[item.TIPODEOPERACION]]</td>
              <td class = "verde">[[item.PEM]]</td>
              <td class = "verde">[[item.MONTO]]</td>
              <td class = "verde">[[item.NACIONAL_INT]]</td>
              <td class = "verde">[[item.ECI]]</td>
              <td class = "verde">[[item.NIPOFF]]</td>
              <td class = "verde">[[item.CVV2]]</td>
              <td class = "verde">[[item.TJ_F_TJ_D]]</td>
              <td class = "verde">[[item.NIVELCUENTA]]</td>
              <td class = "verde">[[item.REINCIDENCIA]]</td>
              <td class = "verde">[[item.SEGMENTO]]</td>
              <td class = "verde">[[item.ANTIGUEDAD]]</td>
              <td class = "verde">[[item.Q2]]</td>
              <td class = "verde">[[item.DIASTRANSCURRIDOS]]</td>
              <td class = "verde">[[item.NUMOVIMIENTOS]]</td>
              <td class = "verde">[[item.DIFTIEMPOENTREMOVIMIENTOS]]</td>
              <td class = "verde">[[item.MONTOF]]</td>
              <td class = "verde">[[item.FRAUDE]]</td>
              <td class = "verde">[[item.TP_TNP]]</td>
              <td class = "verde">[[item.MISMOMONT]]O</td>
              <td class = "verde">[[item.MISMAAFILIACION]]</td>
              <td class = "verde">[[item.TIEMPOENTREMOVIMIENTOS]]</td>
              <td class = "verde">[[item.SUMAMONTOMOVIMIENTOSSELECCIONADOS]]</$
              <td class = "verde">[[item.PATRONDESBLOQUEO]]</td>
              <td class = "verde">[[item.AUTHCE]]</td>
              <td class = "verde">[[item.DIFFECHAOPERACIONALTA]]</td>
              <td class = "verde">[[item.SITUACION]]</td>
              <td class = "verde">[[item.NORECONOCEPRODUCTO]]</td>
              <td class = "verde">[[item.SINMOVIMIENTO]]</td>
            </tr>
          <template>
        </table>
      </div>
      `;
    }
  }
  customElements.define(ModuloCluster.is, ModuloCluster);
}

