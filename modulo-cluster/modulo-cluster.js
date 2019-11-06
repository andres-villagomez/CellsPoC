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

    /*Dinamic table properties*/
    static get properties() {
      return {
        //Table title printing
        arrayTitle: {
          type:Array,
          value:[]
        },
        //Table column calculation
        titleArraySize: {
          type:Array,
          value:[]
        },
        //Table content printing
        objectArray: {
          type:Array,
          value:[]
        }
      };
    }
    /*Dinamic table properties*/

    /* REST connection */
    connectedCallback(){
      super.connectedCallback();
      this.$.ajax.addEventListener('request-success', (e) => {
        this.objectArray = e.detail
        this.arrayTitle = Object.keys(this.objectArray[0])
        const size = this.arrayTitle.length
        this.titleArraySize = size
      });
      this.$.ajax.generateRequest();
    }
    /* REST connection*/

    static get template() {
      return html `
      <style include="modulo-cluster-styles modulo-cluster-shared-styles"></style>
      <slot></slot>

      <!--HTTP connection layer-->
      <cells-generic-dp
        id = "ajax"
        host = "http://localhost:3000"
        path = "endpoint"
	method= "GET">
      </cells-generic-dp>
      <!--HTTP connection layer-->

      <!--Dinamic table design-->
      <div class = "dinamic-tbl">
        <table>
          <caption>CLUSTER</caption>

          <!--Table titles-->
          <template is="dom-repear" items="[[titleArraySize]]">
            <tr>
              <td class = "verde">[[item]]</td>
            </tr>
          </template>
          <!--Table titles-->

          <!--Table content-->
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
          <!--Table content-->
        </table>
      </div>
      <!--Dinamic table design-->
      `;
    }
  }
  customElements.define(ModuloCluster.is, ModuloCluster);
}

