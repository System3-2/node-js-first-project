const getAlljobs = async(req, res) => {
  res.send("Get all jobs")
}

const getJob = async(req, res) => {
  res.send("get single job")
}

const createJob = async(req, res) => {
  res.send("create job")
}

const updateJob = async(req, res) => {
  res.send("update job")
}

const deleteJob = async(req, res) => {
  res.send("delete job")
}


module.exports = {
  getAlljobs,
  getJob,
  createJob,
  updateJob,
  deleteJob
}