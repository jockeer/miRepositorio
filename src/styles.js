export default  (theme) => {
    return {
      container: {
        margin: '10% auto',
        padding: theme.spacing.unit * 2
      },
      textField: {
        marginBottom: theme.spacing.unit * 2
      },
      form:{
        backgroundColor:'stellblue',
        flex:1,
        display:'flex',
        justifyContent:'center'
      },
      list:{
        flex:1,
        backgroundColor:'blue'
      },
      paperContainer:{
        width:'60%'
      },
      wrapper:{
        display:'flex'
      },
      paper:{
        backgroundColor:'#ffffffe8',
        padding:theme.spacing.unit*2
      }
    }
  }