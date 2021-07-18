# k6

 k6 load testing scripts

## Setup
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
```

## Troubleshooting 

#### I am getting errors related to too many open files
[Increase your open files limit](https://easyengine.io/tutorials/linux/increase-open-files-limit/)

## Resources

- [k6 Docs](https://k6.io/docs/)
- [k6 GitHub](https://github.com/grafana/k6)