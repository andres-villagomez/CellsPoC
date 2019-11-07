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
        arrayTitle: {
          type: Array,
          value: []
        },
        objectArray: {
          type: Array,
          value: []
        }
      };
    }
    /*Dinamic table properties*/

    /* REST connection */
    connectedCallback() {
      super.connectedCallback()
      this.$.ajax.addEventListener('request-success', (e) => {
        this.objectArray = e.detail
        this.arrayTitle = Object.keys(this.objectArray[0])
        console.log('Array Lleno', this.arrayTitle)
      })
      this.$.ajax.generateRequest()
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
            <tr>
              <td class = "green">TIPODEOPERACION</td>
              <td class = "green">PEM</td>
              <td class = "green">MONTO</td>
              <td class = "green">NACIONAL_INT</td>
              <td class = "green">ECI</td>
              <td class = "green">NIPOFF</td>
              <td class = "green">CVV2</td>
              <td class = "green">TJ_F_TJ_D</td>
              <td class = "green">NIVELCUENTA</td>
              <td class = "green">REINCIDENCIA</td>
              <td class = "green">SEGMENTO</td>
              <td class = "green">ANTIGUEDAD</td>
              <td class = "green">Q2</td>
              <td class = "green">DIASTRANSCURRIDOS</td>
              <td class = "green">NUMOVIMIENTOS</td>
              <td class = "green">DIFTIEMPOENTREMOVIMIENTOS</td>
              <td class = "green">MONTOF</td>
              <td class = "green">FRAUDE</td>
              <td class = "green">TP_TNP</td>
              <td class = "green">MISMOMONTO</td>
              <td class = "green">MISMAAFILIACION</td>
              <td class = "green">TIEMPOENTREMOVIMIENTOS</td>
              <td class = "green">SUMAMONTOMOVIMIENTOSSELECCIONADOS</td>
              <td class = "green">PATRONDESBLOQUEO</td>
              <td class = "green">AUTHCE</td>
              <td class = "green">DIFFECHAOPERACIONALTA</td>
              <td class = "green">SITUACION</td>
              <td class = "green">NORECONOCEPRODUCTO</td>
              <td class = "green">SINMOVIMIENTO</td>
            </tr>
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
              <td class = "green">[[item.MISMOMONTO]]</td>
              <td class = "green">[[item.MISMAAFILIACION]]</td>
              <td class = "green">[[item.TIEMPOENTREMOVIMIENTOS]]</td>
              <td class = "green">[[item.SUMAMONTOMOVIMIENTOSSELECCIONADOS]]</td>
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
      <button>Nombre</button>
      `;
    }
  }
  customElements.define(ModuloCluster.is, ModuloCluster);
}
