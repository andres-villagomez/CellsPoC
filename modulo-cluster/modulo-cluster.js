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
        active: {
          type:Boolean,
          observer:'_activeChanged'
        },
	obj: {
	  type:'Object',
	  value:{}
	}
      };
    }

    connectedCallback(){
      super.connectedCallback();
      console.log(this.objectArray);
      this.$.ajax.addEventListener('request-success', function(e) {
        console.log(e);
        this.objectArray = e.detail.name;
        console.log('objectArray',this.objectArray)
      });
      this.$.ajax.generateRequest();
    }

    recorrerObjeto() {
      console.log(this.obj);
      return Object.keys(this.objectArray);
    }

    _activeChanged(newValue, oldValue) {
      this.toggleClass('objectArray', newValue);
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
          <tr>
              <td class = "verde">Balance</td>
              <td class = "blanco">Adeudo</td>
              <td class = "rojo">Tasa</td>
          </tr>
          <template is = "dom-repeat" items = "{{objectArray}}">
            <tr>
  	      <td class = "verde">{{itmes}}</td>
              <td class = "blanco">{{items}}</td>
              <td class = "rojo">{{items}}</td>
	    </tr>
          </template>
        </table>
      </div>
      `;
    }
  }
  customElements.define(ModuloCluster.is, ModuloCluster);
}
