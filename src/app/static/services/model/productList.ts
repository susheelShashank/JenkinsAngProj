export interface ProductListData{
    
    providerComp:String,
    prodId:String,
    prodImg:String,
    prodTitle:String,
    properties: ProductProperties

}
export interface ProductProperties {
    propName:String,
    propValue:String
}
