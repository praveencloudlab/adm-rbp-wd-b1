// promise api

//------------------------
// producer / dependency
//------------------------

let trainer={
    askQuesSync(q){
        // .. 10 secs
        return 'this is answer for '+q;
    },
    askQuesAsync(q){
        let promise=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log('tnr resolve/reject the promise');
                resolve('this is the answer for '+q);
                //reject('ooops even i dont know '+q);
                
            },5000)// 10 secs
        })
        return promise;
    }
}

//---------------------------
// consumer / dependent
//---------------------------
let student={
    learn(){
        //------------------------
       // let ans=trainer.askQuesSync("What is Java?"); // pull / synchronous
        //console.log(ans);
        //--------------------------

        console.log('student asking question on trainer');
        let promise=trainer.askQuesAsync('What is JS?')
        console.log('student got promise from trainer, defer actions to future');
        promise
        .then(response=>{
            console.log(response);
        })
        .catch(questionsStatus=>{
            console.log(questionsStatus);
        })

        console.log('cont... with other learnings...');
    }
}

student.learn();
