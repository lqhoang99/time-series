var model=require('./model');
var generators=require('./generators');
var dataset=[52,55,53,52,54,55,47,52,46,47,55,50,46,51,53,53,45,52,51,49,54,54,54,50,45,49,54,47,54,45,55,55,51,53,49,52,49,53,46,54,49,51,55,46,53,49,50,51,53,53];
var windownSize=12;// giá trị nhập vàovào
var result;
var trainingsize=90;// phần trăm dữ liệu dùng để train
async function onTrainClick() {

    var inputs = generators.GenerateDataset(dataset,windownSize);
    var outputs = generators.ComputeSMA(dataset,windownSize);
   console.log(inputs);
   console.log(outputs);
    var n_epochs     =100; // số lần lặp( muốn train nhanh thì gỉam cái này xuống)
    var window_size  = 12; 
    var lr_rate      = 0.01; // tốc độ học
    var n_hl         = 4; // số hidden layer 
    var n_items      = 90; // phần trăm dữ liệu dùng để train

    var callback = function(epoch, log) {
       console.log("Epoch: " + (epoch + 1) + " Loss: " + log.loss );
    }
    result = await model.trainModel(inputs, outputs,n_items, window_size, n_epochs, lr_rate, n_hl, callback);
    console.log('Your model has been successfully trained...');
    onPredictClick();
 }
 async function onPredictClick() {
    var inputs =  generators.GenerateDataset(dataset,windownSize)
    let pred_X = [inputs[inputs.length-1]];
    var pred_Y = model.Predict(pred_X, result['model']);
    console.log(pred_Y);
 }
 onTrainClick();
