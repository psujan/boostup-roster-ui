<div>
  <TextField
    id="jobAddress"
    onChange={handleAddress}
    //           variant="outlined"
    //           className="base-input"
    //           {...register("notes")}
    //           multiline
    //           rows={3}/>
  />
  <TimePicker onChange={handleStartTime} />
</div>;
const handleAddress = (e) => {
  console.log("hee", e.target.value);
};

const handleStartTime = (value) => {
  if (value) {
    const formattedTime = dayjs(value).format("h:mm A");
    console.log("start time", formattedTime);
  }
};
