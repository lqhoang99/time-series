module.exports.ComputeSMA=function(dataset, window_size)
{
     var r_avgs = [];
     for(var i=0;i<=dataset.length-window_size;i++)
     {
        var SMA=0;
        for(var j=i;j<i+window_size;j++){
         
            SMA+=dataset[j];
        }
        r_avgs.push(SMA/ window_size);
    }
    return r_avgs;

}

module.exports.GenerateDataset=function(dataset,window_size){
     var inputs=[];
     for(var i=0;i<=(dataset.length-window_size);i++){
         var tam=[];
         for(var j=i;j<(i+window_size);j++){
             tam.push(dataset[j]);
         }
         inputs.push(tam);
     }
     return inputs;    
 };