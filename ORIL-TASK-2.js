function Parallel(name) {
  this.name = name
  this.results = []
  this.done = (arr) => {
    this.results.push(arr)
  }
  this.job = (step) => {
    step(setTimeout( this.done, 100, "Step 1"))
    return {
      job: (step) => {
        step(setTimeout( this.done, 200, "Step 2"))
        return {
          job: (step) => {
            step(setTimeout( this.done, 300, "Step 3"))
            return {
              job: (step) => {
                step(setTimeout( this.done, 400, "Step 4"))
                return {
                  done: (onDone) => {
                    onDone(this.results)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
// Don`t change the code bellow this line

var runner = new Parallel({
  parallelJobs: 2,
});

runner.job(step1).job(step2).job(step3).job(step4).done(onDone);

function step1(done) {
  console.log("step1");
  setTimeout(done, 1000, "Step 1");
}

function step2(done) {
  console.log("step2");
  setTimeout(done, 1200, "Step 2");
}

function step3(done) {
  console.log("step3");
  setTimeout(done, 1500, "Step 3");
}

function step4(done) {
  console.log("step4");
  setTimeout(done, 100, "Step 4");
}

var isPassed = false;

function onDone(results) {
  console.log("onDone", results);
  console.assert(Array.isArray(results), "Should be array");
  console.log("Thanks, all works fine");
  isPassed = true;
}

setTimeout(function () {
  if (isPassed) return;
  console.error("Test is not done.");
}, 3500);