import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VendorService } from './vendor.service';

@Controller('vendors')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Post()
  create(@Body() createVendorDto: any) {
    return this.vendorService.create(createVendorDto);
  }

  @Get()
  findAll() {
    return this.vendorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVendorDto: any) {
    return this.vendorService.update(id, updateVendorDto);
  }


}
